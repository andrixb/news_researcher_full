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
	searchBarContainer: {
		marginBottom: 24
	},
	titleHeader: {
		marginBottom: 24,
	},
	articlesContainer: {
		display: 'flex',
    	flexFlow: 'column',
    	alignItems: 'center',
	}
}));
