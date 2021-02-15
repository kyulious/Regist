package blooming.webproject.repository;

import blooming.webproject.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository2 extends JpaRepository<Board, Long> {
}
