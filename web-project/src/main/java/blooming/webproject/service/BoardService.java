package blooming.webproject.service;

import blooming.webproject.repository.BoardRepository2;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BoardService {
    private BoardRepository2 boardRepository2;

    public BoardService(BoardRepository2 boardRepository2){
        this.boardRepository2 = boardRepository2;
    }
    @Transactional
    public Long savePost(BoardDto boardDto){
        return boardRepository2.save(boardDto.toEntity()).getId();
    }
}