import style from "./sign.module.scss";

interface SignProps {
  title: string;
  description: string;
  showSearch?: boolean;
  onSearch?: (query: string) => void;
}

export function Sign({
  title,
  description,
  showSearch = false,
  onSearch,
}: SignProps) {
  const handelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch?.(e.currentTarget.value);
    }
  };
  return (
    <div className={style.kasseSign}>
      <h1 className={style.overSkrift}>
        {title}
        <span>
          {showSearch && (
            <input
              type="text"
              placeholder="Søg her..."
              onChange={(e) => onSearch?.(e.target.value)}
              onKeyDown={handelKeyDown}
              className={style.searchInput}
            />
          )}
        </span>
      </h1>
      <p className={style.brodTekst}>{description}</p>
    </div>
  );
}
