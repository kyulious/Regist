package blooming.webproject.domain;

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


}
