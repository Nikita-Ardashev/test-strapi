'use client';
import React, { useMemo, useState } from 'react';
import { apiGetAny } from '../utils/api';

interface anyObject {
	[key: string]: never;
}

const AnyData = () => {
	const jsonRender = (data: anyObject | anyObject[], nesting: number = 0) => {
		const codes: React.ReactElement[] = [];
		const render = (obj: anyObject) => {
			const keys = Object.keys(obj);
			keys.forEach((key, i) => {
				if (
					typeof obj[key] === 'object' &&
					obj[key] !== null &&
					obj[key] !== undefined
				) {
					const isArray = Array.isArray(obj[key]);
					codes.push(
						<code
							style={{
								paddingLeft: nesting * 32 * 1.5,
							}}
						>{`"${key}": ${isArray ? '[' : '{'}`}</code>,
						...jsonRender(obj[key], nesting + 1),
						<code
							style={{ paddingLeft: nesting * 32 }}
						>{`${isArray ? '],' : '},'}`}</code>,
					);
					return;
				}
				if (i === 0)
					codes.push(<code style={{ paddingLeft: nesting * 32 }}>{`{`}</code>);
				codes.push(
					<code
						style={{ paddingLeft: (nesting === 0 ? 0.5 : nesting) * 32 * 1.5 }}
						key={key + obj[key]}
					>{`"${key}": "${obj[key]}",`}</code>,
				);
				if (keys.length - 1 === i)
					codes.push(<code style={{ paddingLeft: nesting * 32 }}>{`},`}</code>);
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
				console.log(r);
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
				{useMemo(() => {
					if (anyData.length === 0) {
						return <p>Вывод данных из БД</p>;
					}
					return jsonRender(anyData).map((node, i) => (
						<React.Fragment key={i}>{node}</React.Fragment>
					));
				}, [anyData])}
			</span>
		</div>
	);
};

export default AnyData;
