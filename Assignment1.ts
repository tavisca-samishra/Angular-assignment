let statements ="The target of an attribute is the entity which the attribute applies to.for example, an attribute may apply to a class, a particular method, or an entire assembly.by default, an attribute applies to the element that follows it.but you can also explicitly identify, for example, whether an attribute is applied to a method, or to its parameter, or to its return value"

statements.split(".").forEach((stmt) => console.log(stmt.charAt(0).toUpperCase() + stmt.slice(1) + '.'));
console.log(statements.split(' ').length);
statements.split(' ').forEach(element => {
    if(element.search("a") != -1)
    console.log(element)
});
console.log(statements.split(' ').filter(word => word === 'the').length);
