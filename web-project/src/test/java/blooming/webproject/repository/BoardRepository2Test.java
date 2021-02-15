package blooming.webproject.repository;

import blooming.webproject.domain.Board;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;

class BoardRepository2Test {
    @Autowired
    private BoardRepository2 boardRepository2;
    @Test
    public void create(){
        String name="김진성";
        LocalDateTime upload_date= LocalDateTime.now();
        LocalDateTime update_date=LocalDateTime.now();
        Board board = new Board();

        board.setName(name);
        board.setUpload_date(upload_date);
        board.setUpdate_date(update_date);

        Board newBoard = boardRepository2.save(board);
        Assertions.assertNotNull(newBoard);

    }
    @Test
    public void read(){

    }
}