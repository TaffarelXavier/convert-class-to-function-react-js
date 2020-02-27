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

	console.log("Extensão iniciada com sucesso!")


	let disposable = vscode.commands.registerCommand('extension.converterClasseEmFuncao', function() {
		
		const { activeTextEditor } = vscode.window;

		if (activeTextEditor) {
			
			const { document } = activeTextEditor;

			const edit = new vscode.WorkspaceEdit();

			for (let i = 0; i <= document.lineCount; i++) {

				const firstLine = document.lineAt(i);

				var el = firstLine.text;

				var className = el.match(/class\s+(\w+)/);
				
				if (Boolean(className)) {
					edit.replace(document.uri, firstLine.range, `const ${className[1]} = () => {\n`);
				} else if (Boolean(el.match(/\s+?render\(\)\s+{/gm))) {
					edit.replace(document.uri, firstLine.range, "\n");
				} else {
					edit.replace(document.uri, firstLine.range, el +"\n");
				}

				return vscode.workspace.applyEdit(edit);
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
