import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t("software_developer"),
          t("freelancer"),
          t("fullstack_developer"),
          t("frontend_developer"),
          t("backend_developer"),
          t("serverside_developer"),
          t("web_developer")
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
