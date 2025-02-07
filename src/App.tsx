import { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  const [tgData, setTgData] = useState<string | null>(null);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      setTgData(tg.initData);

      // Можно добавить обработчики событий:
      // tg.onEvent('mainButtonClicked', () => { ... });
    } else {
      console.log("Приложение не запущено в Telegram");
    }
  }, []);

  return (
    <div>
      <h1>Мой Telegram Web App на Next.js</h1>
      {tgData ? (
        <pre>{JSON.stringify(tgData, null, 2)}</pre>
      ) : (
        <p>Ожидание инициализации Telegram Web App...</p>
      )}
      <div>
        <h2>Список задач</h2>
        <input
          type="text"
          placeholder="Новая задача"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Добавить</button>
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => removeTask(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
