package DAO;

import java.io.*;
import java.util.ArrayList;

/**
 * Created by nick on 2017/2/21.
 */
public class FileReader {

    public static ArrayList<String> readFile(File file){
        ArrayList<String> strings = new ArrayList<>();


        InputStreamReader read = null;
        try {
            read = new InputStreamReader(
                    new FileInputStream(file));
            BufferedReader bufferedReader = new BufferedReader(read);
            String lineTxt = null;
            while((lineTxt = bufferedReader.readLine()) != null){
//                System.out.println(lineTxt);
                strings.add(lineTxt);
            }
            read.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return strings;
    }

}
