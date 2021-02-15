package blooming.webproject.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    @Id@GeneratedValue
    @Column(name ="member_id")
    private Long id;

    private String name;

    private String password;

    private String email;

    private Long point;

    private boolean admin;

    private Long level;

    @OneToMany(mappedBy = "member")
    private List<Board> Boards = new ArrayList<>();


    @Builder
    public Member(Long id, String name, String password, String email, Long point, boolean admin, Long level, List<Board> boards) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.point = point;
        this.admin = admin;
        this.level = level;
        Boards = boards;
    }
}
