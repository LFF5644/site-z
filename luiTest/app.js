const {
	hook_state,
	init,
	node_dom,
}=lui;

init(()=>{
	const [counter, counterSet]=hook_state(0);
	return [null,[
		node_dom("p[innerText=Counter: ]",null,[
			node_dom("span",{innerText: counter}),
		]),
		node_dom("button[innerText=+]",{
			onclick:()=> counterSet(counter+1),
		}),
		node_dom("button[innerText=-]",{
			onclick:()=> counterSet(counter-1),
			disabled: counter<1,
		}),
	]];
});