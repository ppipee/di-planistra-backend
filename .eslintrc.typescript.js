module.exports = {
	files: ['*.ts'],
	plugins: ['@typescript-eslint', 'jest', 'unused-imports'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	env: {
		jest: true,
	},
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
	rules: {
		// Disable Eslint rules that conflict to Prettier
		semi: 'off',
		'max-len': 'off',
		'no-tabs': 'off',
		'comma-dangle': 'off',
		indent: 'off',

		'no-unused-vars': 'off', // used '@typescript-eslint/no-unused-vars' instead
		'dot-notation': [0], // must do because of immutable migration
		'space-before-function-paren': [0],
		'no-underscore-dangle': [0], // _ before action name in actions.js
		'no-param-reassign': [0], // eg. function(a) { a = 12 }
		'global-require': [0], // eg. Unexpected require() in src/modules/th.js
		'no-confusing-arrow': [0],
		'no-shadow': [0],
		'consistent-return': [0], // must return at the end of arrow function
		'prefer-destructuring': [0],
		'no-use-before-define': [0], // define function after function that use it
		'no-return-assign': [0], // Arrow function should not return assignment eg. cant do this -> ref={el => (this.picture = el)}
		'no-console': [2],
		'object-shorthand': [0], // Expected method shorthand
		'func-names': [0], // functions must have a name
		'no-restricted-properties': [1], // Math.pow -> exponentiation operator (**) instead
		'no-plusplus': [0], // eg. i++ or i--
		'no-mixed-operators': [0], // eg. ( a + b / c)
		'class-methods-use-this': [0], // Expected 'this' to be used by class method 'selector'
		'default-case': [0], // switch must have default case
		'no-lone-blocks': [0], // Block is redundant eg. { } in switch case
		'no-unused-expressions': [0],
		'no-restricted-globals': [0],
		'no-restricted-syntax': [0],
		'function-paren-newline': [0], // Unexpected newline after '(' or before ')' of function -> maybe conflict with prettier
		'arrow-parens': [0],
		'one-var': [0], // Split 'const' declarations into multiple statements
		'prefer-promise-reject-errors': [0], // Expected the Promise rejection reason to be an Error eg. in ApiManager.js
		'no-sequences': [0],
		'no-nested-ternary': [0], // Nesting ternary expressions can make code more difficult to understand
		'array-callback-return': [0], // enforces usage of return statement in callbacks of array’s methods.
		'no-empty-function': [0],
		'no-continue': [0], // no continue in if
		'guard-for-in': [0], // need Object.prototype.hasOwnProperty.call() in for in of obj
		'no-new': [0],
		'no-buffer-constructor': [0], // Use the producer methods Buffer.from, Buffer.alloc, and Buffer.allocUnsafe instead
		'no-proto': [0], // no __proto__ -> Use getPrototypeOf method instead
		'no-new-func': [0], // no new Function()
		'operator-assignment': [0], // Assignment can be replaced with operator assignment & failed after git commit
		'object-curly-newline': [0], // can fix with --fix but faild after git push
		'quote-props': [0], // can fix with --fix but conflict with flow "on-string literal property keys not supported"
		'no-alert': [0], // allow alert(), confirm(), prompt()
		'no-mixed-spaces-and-tabs': [0],
		'wrap-iife': [0],
		'semi-style': [0],
		'no-extra-semi': [0],
		'generator-star-spacing': [0],
		'prefer-arrow-callback': [0],
		'arrow-body-style': [0],
		'no-lonely-if': 'off',
		'no-else-return': 'off',
		'operator-linebreak': [0],
		'implicit-arrow-linebreak': [0],

		// import
		'import/no-duplicates': [0], // drain performance
		'import/no-extraneous-dependencies': [0], // Forbid the import of external modules that are not declared in the package.json's dependencies, devDependencies, optionalDependencies or peerDependencies.
		'import/no-unresolved': [0],
		'import/extensions': [0],
		'import/prefer-default-export': [0],
		'import/first': [0], // imports that come after non-import statements.
		'import/no-mutable-exports': [0], // Forbids the use of mutable exports with var or let
		'import/no-dynamic-require': [0],
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: 'core/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: 'common/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: 'modules/**',
						group: 'internal',
						position: 'after',
					},
				],
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				pathGroupsExcludedImportTypes: ['react'],
			},
		],
	},
}
