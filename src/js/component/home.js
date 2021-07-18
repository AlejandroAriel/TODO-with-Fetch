import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDoList, Lista, Alert } from "./list.js";
//create your first component

export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>TODO LIST!!!</h1>
			<p></p>
			<ul>
				{" "}
				<ToDoList />{" "}
			</ul>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}
