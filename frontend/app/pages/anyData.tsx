'use client';
import React, { useMemo, useState } from 'react';
import { apiGetAny } from '../utils/api';

interface anyObject {
	[key: string]: never;
}

const AnyData = () => {
	const jsonRender = (data: anyObject | anyObject[], nesting: number = 1) => {
		const codes: React.ReactElement[] = [];
		const render = (obj: anyObject) => {
			const keys = Object.keys(obj);
			keys.forEach((key, i) => {
				const isArray = Array.isArray(obj[key]);
				if (i === 0 && nesting !== 1)
					codes.push(<code style={{ paddingLeft: nesting * 32 }}>{'{'}</code>);
				if (
					typeof obj[key] === 'object' &&
					obj[key] !== null &&
					obj[key] !== undefined
				) {
					codes.push(
						<code
							style={{
								paddingLeft: nesting * 32,
							}}
						>{`"${key}": ${isArray ? '[' : ''}`}</code>,
						...jsonRender(obj[key], nesting + 1),
						<code style={{ paddingLeft: nesting * 32 }}>
							{isArray ? '],' : ''}
						</code>,
					);
				} else {
					codes.push(
						<code
							style={{ paddingLeft: nesting * 64 }}
							key={key + obj[key]}
						>{`"${key}": "${obj[key]}",`}</code>,
					);
				}
				if (keys.length - 1 === i && nesting !== 1)
					codes.push(<code style={{ paddingLeft: nesting * 32 }}>{'},'}</code>);
			});
		};
		if (Array.isArray(data)) {
			data.forEach(render);
		} else {
			render(data);
		}
		return codes;
	};
	const [anyData, setAnyData] = useState<anyObject[]>([]);
	const [nameData, setNameData] = useState<string>('');
	const onClickReqData = async () => {
		if (nameData.trim().length === 0) {
			alert('Введите название таблицы');
		}
		apiGetAny(nameData)
			.then((r) => {
				setAnyData(r);
			})
			.catch((e) => {
				console.error(e);
				alert('Такой таблицы не существует');
				throw new Error(e);
			});
	};
	return (
		<div className="home__any-data">
			<div>
				<input
					placeholder="Введите название таблицы"
					type="text"
					value={nameData}
					onChange={(e) => {
						setNameData(e.currentTarget.value.toLowerCase());
					}}
				/>
				<button type="button" onClick={onClickReqData}>
					OK
				</button>
			</div>
			<span>
				<code>{Array.isArray(anyData) ? '[' : '{'}</code>
				{useMemo(() => {
					if (anyData.length === 0) {
						return <p>Вывод данных из БД</p>;
					}
					return jsonRender(anyData).map((node, i) => (
						<React.Fragment key={i}>{node}</React.Fragment>
					));
				}, [anyData])}
				<code>{Array.isArray(anyData) ? ']' : '}'}</code>{' '}
			</span>
		</div>
	);
};

export default AnyData;
