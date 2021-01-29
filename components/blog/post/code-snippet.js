import { useContext } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ThemeContext } from '../../../contexts/themeContext';
import {
	vscDarkPlus,
	base16AteliersulphurpoolLight,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';
import device from '../../../theme/media';

const Code = styled(SyntaxHighlighter)`
	margin-bottom: 1.5rem !important;
	border-radius: 0.5rem;
	border: 1px solid var(--color-primary-diff-3);
	@media ${device.large} {
		margin-bottom: 2.5rem !important;
	}
`;

const CodeSnippet = ({ language, value }) => {
	const [isLight] = useContext(ThemeContext);
	return (
		<Code
			style={isLight ? base16AteliersulphurpoolLight : vscDarkPlus}
			language={language}
			children={value}
		/>
	);
};

export default CodeSnippet;
