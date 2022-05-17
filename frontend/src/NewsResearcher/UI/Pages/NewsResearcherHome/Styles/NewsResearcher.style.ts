import { makeStyles } from '@mui/styles';

interface NewsResearcherStylesTheme {
	mixins: any;
	zIndex: any;
	transitions: any;
	breakpoints: any;
	spacing: any;
};

export const useNewsResearcherStyles = makeStyles((theme: NewsResearcherStylesTheme) => ({
	root: {
		width: '100%',
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 18,
		overflow: 'auto',
	},
}));
