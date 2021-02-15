
package blooming.webproject;

import blooming.webproject.domain.Member;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Data
@NoArgsConstructor
public class MemberForm {

    private Long id;

    private String name;

    private String password;

    private String email;

    private Long point;

    private boolean admin;

    private Long level;

    @Builder
    public MemberForm(Long id, String name, String password, String email, Long point, boolean admin, Long level) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.point = point;
        this.admin = admin;
        this.level = level;
    }

    public Member toEntity(){
        return Member.builder()
                .id(id)
                .name(name)
                .password(new BCryptPasswordEncoder().encode(password))
                .email(email)
                .point(point)
                .admin(admin)
                .level(level)
                .build();
    }
}
