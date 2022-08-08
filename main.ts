import { App, Editor, MarkdownView, Plugin, PluginSettingTab, Setting, SuggestModal } from 'obsidian';

// Remember to rename these classes and interfaces!
interface GreekLetter {
	title: string;
	greek: string;
	upper: boolean
}
  
const ALL_GREEK: GreekLetter[] = [
	{
		title: "Alpha (uppercase)",
		greek: "Α",
		upper: true,
	},
	{
		title: "alpha (lowercase)",
		greek: "α",
		upper: false,
	},

	{
		title: "Beta (uppercase)",
		greek: "Β",
		upper: true,
	},
	{
		title: "beta (lowercase)",
		greek: "β",
		upper: false,
	},
	
	{
		title: "Gamma (uppercase)",
		greek: "Γ",
		upper: true,
	},
	{
		title: "gamma (lowercase)",
		greek: "γ",
		upper: false,
	},
	
	{
		title: "Delta (uppercase)",
		greek: "Δ",
		upper: true,
	},
	{
		title: "delta (lowercase)",
		greek: "δ",
		upper: false,
	},
	
	{
		title: "Epsilon (uppercase)",
		greek: "Ε",
		upper: true,
	},
	{
		title: "epsilon (lowercase)",
		greek: "ε",
		upper: false,
	},
	
	{
		title: "Zeta (uppercase)",
		greek: "Ζ",
		upper: true,
	},
	{
		title: "zeta (lowercase)",
		greek: "ζ",
		upper: false,
	},
	
	{
		title: "Eta (uppercase)",
		greek: "Η",
		upper: true,
	},
	{
		title: "eta (lowercase)",
		greek: "η",
		upper: false,
	},
	
	{
		title: "Theta (uppercase)",
		greek: "Η",
		upper: true,
	},
	{
		title: "theta (lowercase)",
		greek: "η",
		upper: false,
	},
	
	{
		title: "Iota (uppercase)",
		greek: "Ι",
		upper: true,
	},
	{
		title: "iota (lowercase)",
		greek: "ι",
		upper: false,
	},
	
	{
		title: "Kappa (uppercase)",
		greek: "Κ",
		upper: true,
	},
	{
		title: "kappa (lowercase)",
		greek: "κ",
		upper: false,
	},
	
	{
		title: "Lambda (uppercase)",
		greek: "Λ",
		upper: true,
	},
	{
		title: "lambda (lowercase)",
		greek: "λ",
		upper: false,
	},
	
	{
		title: "Mu (uppercase)",
		greek: "Μ",
		upper: true,
	},
	{
		title: "mu (lowercase)",
		greek: "μ",
		upper: false,
	},
	
	{
		title: "Nu (uppercase)",
		greek: "Ν",
		upper: true,
	},
	{
		title: "nu (lowercase)",
		greek: "ν",
		upper: false,
	},
	
	{
		title: "Xi (uppercase)",
		greek: "Ξ",
		upper: true,
	},
	{
		title: "xi (lowercase)",
		greek: "ξ",
		upper: false,
	},
	
	{
		title: "Omicron (uppercase)",
		greek: "Ο",
		upper: true,
	},
	{
		title: "omicron (lowercase)",
		greek: "ο",
		upper: false,
	},
	
	{
		title: "Pi (uppercase)",
		greek: "Π",
		upper: true,
	},
	{
		title: "pi (lowercase)",
		greek: "π",
		upper: false,
	},
	
	{
		title: "Rho (uppercase)",
		greek: "Ρ",
		upper: true,
	},
	{
		title: "rho (lowercase)",
		greek: "ρ",
		upper: false,
	},
	
	{
		title: "Sigma (uppercase)",
		greek: "Σ",
		upper: true,
	},
	{
		title: "sigma (lowercase)",
		greek: "σ",
		upper: false,
	},
	{
		title: "sigma (lowercase)",
		greek: "ς",
		upper: false,
	},
	
	{
		title: "Tau (uppercase)",
		greek: "Τ",
		upper: true,
	},
	{
		title: "tau (lowercase)",
		greek: "τ",
		upper: false,
	},
	
	{
		title: "Upsilon (uppercase)",
		greek: "Υ",
		upper: true,
	},
	{
		title: "upsilon (lowercase)",
		greek: "υ",
		upper: false,
	},
	
	{
		title: "Phi (uppercase)",
		greek: "Φ",
		upper: true,
	},
	{
		title: "phi (lowercase)",
		greek: "φ",
		upper: false,
	},
	
	{
		title: "Chi (uppercase)",
		greek: "Χ",
		upper: true,
	},
	{
		title: "chi (lowercase)",
		greek: "χ",
		upper: false,
	},
	
	{
		title: "Psi (uppercase)",
		greek: "Ψ",
		upper: true,
	},
	{
		title: "psi (lowercase)",
		greek: "ψ",
		upper: false,
	},
	
	{
		title: "Omega (uppercase)",
		greek: "Ω",
		upper: true,
	},
	{
		title: "omega (lowercase)",
		greek: "ω",
		upper: false,
	},
];
  
export class GreekModal extends SuggestModal<GreekLetter> {
	editor: Editor;
	constructor(app: App, editor: Editor){
		super(app)
		this.editor = editor;
	}

  // Returns all available suggestions.
  getSuggestions(query: string): GreekLetter[] {
    return ALL_GREEK.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Renders each suggestion item.
  renderSuggestion(greek: GreekLetter, el: HTMLElement) {
    el.createEl("div", { text: greek.title });
    el.createEl("small", { text: greek.greek });
  }

  // Perform action on the selected suggestion.
  onChooseSuggestion(greek: GreekLetter, evt: MouseEvent | KeyboardEvent) {
	this.editor.replaceSelection(greek.greek);
  }
}
interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		// // This creates an icon in the left ribbon.
		// const ribbonIconEl = this.addRibbonIcon('dice', 'Sample Plugin', (evt: MouseEvent) => {
		// 	// Called when the user clicks the icon.
		// 	new Notice('This is a notice!');
		// });
		// // Perform additional things with the ribbon
		// ribbonIconEl.addClass('my-plugin-ribbon-class');

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		// const statusBarItemEl = this.addStatusBarItem();
		// statusBarItemEl.setText('Status Bar Text');

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-obsidian-greek',
			name: 'Add greek letter',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				new GreekModal(this.app, editor).open();
				console.log(editor.getSelection());
				
			}
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SampleSettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Settings for my awesome plugin.'});

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					console.log('Secret: ' + value);
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
