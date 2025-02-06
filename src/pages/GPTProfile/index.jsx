import React from "react";
import SettingsHeader from "../../components/SettingsHeader";
import AllModelsTab from "../../components/AllModelsTab";
import GPTsTab from "../../components/GPTsTab";
import SettingsTab from "../../components/SettingsTab";
import ConversationsTab from "../../components/ConversationsTab";
import "./styles.css";

const GPTProfile = () => {
  const tabs = [
    {
      key: "all_models",
      label: "Все модели",
      icon: "bi bi-cpu-fill",
      content: <AllModelsTab />,
    },
    {
      key: "gpts",
      label: "GPTs",
      icon: "bi bi-app-indicator",
      content: <GPTsTab />,
    },
    {
      key: "settings",
      label: "Настройки",
      icon: "bi bi-tools",
      content: <SettingsTab/>,
    },
    {
      key: "dialogs",
      label: "Диалоги",
      icon: "bi bi-terminal-fill",
      content: <ConversationsTab/>,
    },
  ];

  return (
    <div>
      <div className="info-block-dialogs">
        <i className="bi bi-info-circle-fill"></i>
        Устанавливайте различные модели, используйте GPTs, сохраняйте свои индивидуальные настройки и контролируйте запросы в этом меню.
      </div>
      <SettingsHeader tabs={tabs} />
    </div>
  );
};

export default GPTProfile;
