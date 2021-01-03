import React from 'react';
import styled from 'styled-components';
import device from '../../theme/media';

const Container = styled.p`
	opacity: 0.8;
	line-height: 30px;
	font-size: 1.6rem;
	letter-spacing: 0.3px;
	font-weight: 400;

	@media ${device.xSmall} {
		font-size: 1.5rem;
	}
	@media ${device.medium} {
		max-width: 85%;
		margin: 0 auto;
	}
	@media ${device.large} {
		margin-left: 0;
	}
`;

const Paragraph = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

export default Paragraph;
