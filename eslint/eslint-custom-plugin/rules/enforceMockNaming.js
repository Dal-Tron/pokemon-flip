module.exports = {
  // The 'meta' property holds metadata about the rule itself.
  meta: {
    // The 'type' of the rule can be "problem", "suggestion", or "layout". This rule is a "suggestion".
    type: "suggestion",

    // The 'docs' property holds documentation specifics such as description, category, and recommendation status.
    docs: {
      description:
        "enforce naming convention for variables created with createMock", // Brief description of what the rule does.
      category: "Stylistic Issues", // Category under which the rule falls.
      recommended: false, // Indicates whether this rule is recommended by default.
    },

    // The 'schema' array specifies the rule's options. It's empty here, meaning the rule has no options.
    schema: [],
  },

  // The 'create' method is called when ESLint runs this rule on a codebase.
  create(context) {
    // This method returns an object where keys are the types of AST nodes to listen for, and values are functions that handle those nodes.
    return {
      // 'VariableDeclarator' nodes represent variable declarations (e.g., const x = y;).
      VariableDeclarator(node) {
        // This condition checks if the node represents a function call to 'createMock'.
        if (
          node.init && // Check if the declaration has an initialization.
          node.init.type === "CallExpression" && // Ensure the initialization is a function call.
          node.init.callee.name === "createMock" // Ensure the function called is 'createMock'.
        ) {
          // Extract the name of the variable being declared.
          const variableName = node.id.name;
          // Check if the variable name starts with 'mock'. If not, report an error.
          if (!variableName.startsWith("mock")) {
            context.report({
              node, // The AST node that caused the rule to report an error.
              message:
                "Variables returned from 'createMock' should start with 'mock'.", // The message shown when the rule is violated.
            });
          }
        }
      },
    };
  },
};
