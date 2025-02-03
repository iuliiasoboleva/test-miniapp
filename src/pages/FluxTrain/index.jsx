import React from "react";
import SettingsHeader from "../../components/SettingsHeader";
import FluxForm from "../../components/TrainForm";
import Notice from "../../components/Notice";
import LoRATrainingDashboard from "../../components/LoRATrainingDashboard";

const FluxTrain = () => {
  const tabs = [
    {
      key: "train",
      label: "Обучить LoRa",
      icon: "bi bi-node-plus-fill",
      content: <FluxForm />,
    },
    {
      key: "my_lora",
      label: "Мои LoRa",
      icon: "bi bi-list-ul",
      content: <LoRATrainingDashboard/>,
    },
    {
      key: "archive",
      label: "Архив LoRa",
      icon: "bi bi-archive-fill",
      content: <Notice text={'В архиве пока нет лор.'} />
      ,
    },
    {
      key: "knowledge_base",
      label: "База знаний",
      icon: "bi bi-question",
      content: <div>Документация и справочная информация</div>,
    },
  ];

  return (
    <div>
      <SettingsHeader tabs={tabs} />
    </div>
  );
};

export default FluxTrain;
