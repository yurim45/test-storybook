import React from 'react';
import styled from 'styled-components';
import { IconNotice, IconOpenArrow } from '@components/icons';
import { flex, title03 } from '../../../styles/variable';

type SubMainTopProps = {
	title: string;
};

const SubMainTop = ({ title }: SubMainTopProps) => {
	return (
		<SubMain>
			<div className="title">
				<h2>{title}</h2>
				<IconOpenArrow open={true} />
			</div>
			<IconNoticeWrapper>
				<IconNotice />
			</IconNoticeWrapper>
		</SubMain>
	);
};

export default SubMainTop;

const SubMain = styled.div`
	width: 375px;
	height: 52px;
	background: ${({ theme }) => theme.colors.white};

	.title {
		${flex()};
		width: 245px;
		margin: auto;

		h2 {
			${title03()};
			display: inline;
			padding: 12px 4px;
			line-height: 2;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
`;

const IconNoticeWrapper = styled.span`
	position: relative;
	top: -40px;
	right: -331px;
	width: 13px;
	line-height: 0.5;
`;