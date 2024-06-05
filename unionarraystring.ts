//unions provide a way to handle diff types too. eg.
//you may have a function that takes an array or a string:
function getLength(obj: string | string[]) {
	return obj.length;
}
