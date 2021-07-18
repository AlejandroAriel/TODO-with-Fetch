import React, { useState, useEffect } from "react";
import PropTypes, { array } from "prop-types";
import { ListGroup, Container, Row, Col } from "react-bootstrap";

export const ToDoList = props => {
	const [arr, setArr] = useState([]);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alejandroariel")
			.then(response => response.json()) //Header o saber qué pasó con llamada. JSON(convierte el archivo legible para js)
			.then(data => {
				// Se procesa la información
				setArr(data);
			});
	}, []);

	useEffect(() => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/alejandroariel",
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(arr)
			}
		);
	}, [arr]);

	const result = arr.map((item, index) => (
		<ListGroup.Item as="li" active key={index}>
			{item.label}
			<button
				onClick={() => {
					let newArr = arr.filter(el => el != arr[index]);
					setArr(newArr);
				}}>
				X
			</button>
		</ListGroup.Item>
	));

	return (
		<>
			<Container>
				<Row>
					<Col>
						<input
							onChange={e => setInputValue(e.target.value)}
							className="form-control form-control-lg"
							type="text"
							placeholder=".form-control-lg"></input>

						<button
							onClick={() => {
								if (inputValue != "") {
									setArr([
										...arr,
										{ label: inputValue, done: true }
									]);
								}
							}}>
							enviar
						</button>
						<ListGroup as="ul">{result}</ListGroup>
					</Col>
				</Row>
			</Container>
		</>
	);
};
ToDoList.propTypes = {
	title: PropTypes.string
};
