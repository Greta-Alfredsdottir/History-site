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
              className={style.searchInput}
            />
          )}
        </span>
      </h1>
      <p className={style.brodTekst}>{description}</p>
    </div>
  );
}
