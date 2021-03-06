import React from 'react';
import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';
import { flex, inputStyle, title05 } from '@styles/variable';
import { theme } from '@styles/theme';
import icons from '@components/icons';

type TField = {
	id: number;
	value: string;
	name: string;
};

type SelectProps = {
	register: UseFormRegisterReturn;
	title?: string;
	data: TField[];
	isDisabled?: boolean;
	iconHelp?: boolean;
	iconStar?: boolean;
	placeholder?: string;
};

const Select = ({
	register,
	title,
	data,
	isDisabled = false,
	placeholder = '선택하세요.',
	iconHelp,
	iconStar,
}: SelectProps): JSX.Element => {
	const formattedDatas: TField[] =
		data &&
		data.map((data: TField) => {
			return {
				id: data.id,
				value: data.value,
				name: data.name,
			};
		});

	return (
		<Inner>
			{title && (
				<TitleWrapper>
					<Title>{title}</Title>
					{iconHelp && <icons.Help width={14} />}
					{iconStar && <icons.Star />}
				</TitleWrapper>
			)}

			<SelectItem disabled={isDisabled} {...register}>
				<option value={'default'}>{placeholder}</option>
				{formattedDatas?.map((item: any) => (
					<option value={item.value} key={item.id}>
						{item.name}
					</option>
				))}
			</SelectItem>
			<span>▼</span>
		</Inner>
	);
};

export default Select;

const Inner = styled.div`
	width: 335px;
	margin: auto;

	span {
		position: relative;
		top: -28px;
		right: -305px;
		width: 0;
		color: ${({ theme }) => theme.colors.txt333};
		z-index: 2;
	}
`;

const Title = styled.div`
	padding: 12px 3px 12px 0;
	${title05()};
`;

const TitleWrapper = styled.div`
	${flex('flex-start', 'center')};
`;

const SelectItem = styled.select`
	${inputStyle()};
	background: ${(props) => (props.disabled ? '#F8F8F8' : '#ffffff')};
	color: ${(props) => props.disabled && theme.colors.txt999};

	option {
		background: lightcoral;
	}
`;
