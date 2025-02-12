import { useState, FormEvent } from "react";
import { MyInput } from "../components/MyInput";

export const TodoPage = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-primary p-2">
      <h2 className="text-2xl font-bold mb-4">Список задач</h2>
      <form onSubmit={addTask} className="mb-4">
        <MyInput
          type="text"
          label="Новая задача"
          placeholder="Введите задачу"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-tg-button text-tg-buttonText py-2 px-4 rounded-lg hover:bg-tg-button-hover transition-colors"
        >
          Добавить задачу
        </button>
      </form>

      <div className="space-y-2">
        {tasks.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-secondary p-3 rounded-lg"
          >
            <span className="text-tg-text">{item}</span>
            <button
              onClick={() => removeTask(index)}
              className="p-1 rounded-lg"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
