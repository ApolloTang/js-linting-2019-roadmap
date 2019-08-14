

**Reference:**

- https://javascriptplayground.com/typescript-eslint/

- https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb



**Bug**

Can not specified extension in configuration at this time: 

[https://github.com/eslint/eslint/issues/10829](https://github.com/eslint/eslint/issues/10828)

To get around  this, add the follwoing your setting: 

vsCode settings.json:

```
 "eslint.validate": [
      "javascript",
      "javascriptreact",
      "typescript",
      "typescriptreact"
    ]
```

coc-settings.json:

```
  "eslint.filetypes": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
```



