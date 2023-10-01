import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/termsTutor" element={<TermsForTutor />} />
          <Route path="/termsStudents" element={<TermsForStudents />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
