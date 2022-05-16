import { makeStyles } from '@mui/styles';

interface NewsResearcherHomeStylesTheme {
	mixins: any;
	zIndex: any;
	transitions: any;
	breakpoints: any;
	spacing: any;
};

export const useNewsResearcherHomeStyles = makeStyles((theme: NewsResearcherHomeStylesTheme) => ({
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
