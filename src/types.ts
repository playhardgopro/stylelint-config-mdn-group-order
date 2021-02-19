export type MDNGroup = 'Compositing and Blending' |
	'CSS Animations' |
	'CSS Backgrounds and Borders' |
	'CSS Basic User Interface' |
	'CSS Box Alignment' |
	'CSS Box Model' |
	'CSS Color' |
	'CSS Columns' |
	'CSS Containment' |
	'CSS Counter Styles' |
	'CSS Display' |
	'CSS Flexible Box Layout' |
	'CSS Fonts' |
	'CSS Fragmentation' |
	'CSS Generated Content' |
	'CSS Grid Layout' |
	'CSS Images' |
	'CSS Inline' |
	'CSS Lists and Counters' |
	'CSS Logical Properties' |
	'CSS Masking' |
	'CSS Miscellaneous' |
	'CSS Motion Path' |
	'CSS Overflow' |
	'CSS Pages' |
	'CSS Positioning' |
	'CSS Ruby' |
	'CSS Scroll Anchoring' |
	'CSS Scroll Snap' |
	'CSS Scrollbars' |
	'CSS Shapes' |
	'CSS Speech' |
	'CSS Table' |
	'CSS Text Decoration' |
	'CSS Text' |
	'CSS Transforms' |
	'CSS Transitions' |
	'CSS Variables' |
	'CSS Will Change' |
	'CSS Writing Modes' |
	'CSSOM View' |
	'Filter Effects' |
	'MathML' |
	'Microsoft Extensions' |
	'Mozilla Extensions' |
	'Pointer Events' |
	'WebKit Extensions'

export type MDNGroupCSSModules = 'Composes' | MDNGroup

export type MDNProperties = { [index: string]: MDNProperty }

export type MDNProperty = {
	syntax: string,
	media: string,
	inherited: boolean,
	animationType: string,
	percentages: string,
	groups: MDNGroup[] | MDNGroupCSSModules[],
	initial: string,
	appliesto: string,
	computed: string,
	order: string,
	status: string,
	mdn_url: string
}

export type Configuration = {
	groupName: string,
	properties: string[]
	emptyLineBefore: string
	noEmptyLineBetween: boolean
}
