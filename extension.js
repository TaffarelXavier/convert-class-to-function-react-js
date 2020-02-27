// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function() {
		const { activeTextEditor } = vscode.window;

		if (activeTextEditor) {
			const { document } = activeTextEditor;

			for (let i = 0; i <= document.lineCount; i++) {
				const firstLine = document.lineAt(i);

				let data = firstLine.text.match(/class/);

				if (data) {
					console.log(firstLine.text);

					const edit = new vscode.WorkspaceEdit();

					// edit.insert(document.uri, firstLine.range.start, '42\n');
					edit.replace(document.uri, firstLine.range, 'const App = () => {');

					return vscode.workspace.applyEdit(edit);
				}
			}
		}

	});

	context.subscriptions.push(disposable);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
