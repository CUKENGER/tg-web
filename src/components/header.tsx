import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../themeProvider";

export const Header = () => {
  const [tgData, setTgData] = useState<string | null>(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      setTgData(tg.initData);
    } else {
      console.log("Приложение не запущено в Telegram");
    }
  }, []);

  const user = Telegram.WebApp.initDataUnsafe.user;

  const { toggleTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-xs sm:text-base">
        {tgData ? (
          <p className="p-2 rounded-lg bg-secondary">
            Work on Telegram Web App.
            <p>Hi,{user?.first_name}</p>
          </p>
        ) : (
          <p className="p-2 rounded-lg bg-secondary">Вы вне telegram web app</p>
        )}
        <button
          onClick={toggleTheme}
          className="p-2 transition-colors rounded-lg"
        >
          toggle theme
        </button>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="p-2 rounded-lg bg-secondary text-primary hover:text-button transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
          to="/products"
        >
          Products
        </Link>
        <Link
          className="p-2 rounded-lg bg-secondary text-primary hover:text-button transition-transform transform hover:scale-105 shadow-md hover:shadow-lg"
          to="/products/create"
        >
          Create Products
        </Link>
        <Link className="p-2 rounded-lg bg-secondary text-primary hover:text-button transition-transform transform hover:scale-105 shadow-md hover:shadow-lg" to="/">
          Todo
        </Link>
      </div>
    </div>
  );
};
