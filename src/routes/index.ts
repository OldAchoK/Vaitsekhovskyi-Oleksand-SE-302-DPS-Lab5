import { createFileRoute } from "@tanstack/react-router";
import Board from "../pages/Home";
import './styles.css';

export const Route = createFileRoute("/")({
	component: Board,
});
