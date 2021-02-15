package blooming.webproject.repository;

import blooming.webproject.domain.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class BoardRepository {

    private final EntityManager em;

    public void save(Board board){
        em.persist(board);
    }
    public Board findOne(Long id){
        return em.find(Board.class, id);
    }

}
