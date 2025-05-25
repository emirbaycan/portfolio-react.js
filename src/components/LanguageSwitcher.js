import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.dataset.value;
    i18n.changeLanguage(newLang);
  };

  const options = [
    { value: 'en', label: 'EN' },
    { value: 'tr', label: 'TR' }
  ]

  const rows = [];
  for (var option in options) {      
      option = options[option];
      rows.push(<Button variant="secondary" className="language" data-value={option.value} onClick={handleLanguageChange}>{option.label}</Button>);
  }

  return <div className="languages">{rows}</div>;

};

export default LanguageSwitcher;