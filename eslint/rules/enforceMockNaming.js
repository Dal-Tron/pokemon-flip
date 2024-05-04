module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "enforce naming convention for variables created with createMock",
      category: "Stylistic Issues",
      recommended: false,
    },
    schema: [],
  },
  create(context) {
    function checkVariableDeclarator(node) {
      // Check for direct call to createMock
      if (
        node.init &&
        node.init.type === "CallExpression" &&
        node.init.callee.name === "createMock"
      ) {
        validateVariableName(node);
      }
      // Check for function that returns createMock
      if (
        node.init &&
        node.init.type === "ArrowFunctionExpression" &&
        node.init.body.type === "CallExpression" &&
        node.init.body.callee.name === "createMock"
      ) {
        validateVariableName(node);
      }
    }

    function validateVariableName(node) {
      const variableName = node.id.name;
      if (!variableName.startsWith("mock")) {
        context.report({
          node,
          message:
            "Variables returned from 'createMock' should start with 'mock'.",
        });
      }
    }

    return {
      VariableDeclarator: checkVariableDeclarator,
    };
  },
};
