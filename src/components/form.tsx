"use client";

import React, { useState } from "react";

import Lang from "./educationForm";
import Login from "./create.user";
import Eduction from "./educationForm";
import CreateUser from "./create.user";
import LanguageForm from "./languageForm";
import ExperienceForm from "./ExperienceForm";
import EductionForm from "./educationForm";

export default function Form() {
  const [open, setOpen] = useState(1);

  return (
    <div>
      {open === 1 && <CreateUser setOpen={setOpen} />}
      {open === 2 && <EductionForm setOpen={setOpen} />}
      {open === 3 && <LanguageForm setOpen={setOpen} />}
      {open === 4 && <ExperienceForm setOpen={setOpen} />}
    </div>
  );
}
