package blooming.webproject.service;

import blooming.webproject.domain.Board;
import lombok.*;

import java.time.LocalDateTime;
@Getter
@Setter
@NoArgsConstructor
@Data
@AllArgsConstructor
public class BoardDto {
    private Long id;
    private String name;
    private String content;
    private LocalDateTime upload_date;
    private LocalDateTime update_date;
    private Long hits;

    public Board toEntity(){ // 빌더 패턴
        Board build = Board.builder()
                .id(id)
                .name(name)
                .content(content)
                .build();
        return build;
    }

    @Builder
    public BoardDto(Long id, String name, String content, Long hits, LocalDateTime upload_date , LocalDateTime update_date){
        this.id = id;
        this.content = content;
        this.hits = hits;
        this.upload_date=upload_date;
        this.update_date=update_date;
    }

}
