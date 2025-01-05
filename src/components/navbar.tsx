import { fixedColumnIds, metadata } from "@shared/metadata"
import { Link } from "@tanstack/react-router"
import { currentColumnIDAtom } from "~/atoms"

export function NavBar() {
  const currentId = useAtomValue(currentColumnIDAtom)
  const { toggle } = useSearchBar()
  return (
    <div className="navigation">
      <button
        type="button"
        onClick={() => toggle(true)}
        className="nav-button"
      >
        更多
      </button>
      {fixedColumnIds.map(columnId => (
        <Link
          key={columnId}
          to="/c/$column"
          params={{ column: columnId }}
          className={currentId === columnId ? "active" : ""}
        >
          {metadata[columnId].name}
        </Link>
      ))}
    </div>
  )
}
