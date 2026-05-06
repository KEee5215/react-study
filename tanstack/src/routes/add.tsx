import { createFileRoute } from "@tanstack/react-router";
import AddForm from "../component/AddForm";

export const Route = createFileRoute("/add")({
  component: Add,
});

function Add() {
  return <AddForm></AddForm>;
}
