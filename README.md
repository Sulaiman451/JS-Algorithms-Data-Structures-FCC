## The Task

We have a results object with success, failure, and skipped properties and a makeList function. Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array element from the failure property on the result object and have a class attribute with the value text-warning. the makeList function should return the array of list item strings. Use an iterator method to get the desired output as shown below:

```
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

Refer to stringsTemplate.js to see my solution, comments, and the original problem.
