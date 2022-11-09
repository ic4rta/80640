package mx.uv;

import static spark.Spark.*;

import java.util.HashMap;
import java.util.Map;

import com.google.gson.*;;

/**
 * Hello world!
 *
 */
public class App {
    public static Gson gson = new Gson();

    //base de datos en memoria
    public static Map<String, Usuario> usuarios = new HashMap<>();

    public static void main(String[] args) {
        Usuario u1 = new Usuario("1", "Pablo", "123");
        Usuario u2 = new Usuario("2", "Ana", "12345");

        usuarios.put(u1.getId(), u1);
        usuarios.put(u2.getId(), u2);


        before((req, res) -> res.type("application/json"));
        System.out.println("Hello World!");
        get("/usuario", (req, response) -> gson.toJson(u1));
        get("/usuarios", (req, response) -> gson.toJson(usuarios));

        post("/usuarios", (req, res) -> {
            String datosFormularo = req.body(); 
            Usuario u = gson.fromJson(datosFormularo, Usuario.class);
            usuarios.put(u.getId(), u);
            return "SI";
        });

    }
}
