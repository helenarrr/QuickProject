package auth;

import com.QuickProject.QuickProjectApp.dao.UserRepository;
import com.QuickProject.QuickProjectApp.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    public AuthenticationResponse register(RegisterRequest request) {
var user = User.builder()
        .
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        return null;
    }
}
