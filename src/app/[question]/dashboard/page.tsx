"use client";
import AiSlider from "@/components/home/AiSlider";
import ToDoApp from "@/components/question-two/ToDoApp";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
    const params = useParams();
    const { question } = params;
    return (
        <>
            {question === "question-1" && <AiSlider />}
            {question === "question-2" && <ToDoApp />}
        </>
    );
};

export default page;
