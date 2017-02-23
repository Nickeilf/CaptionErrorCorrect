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

    public String saveFile(String name,File caption,String[][] modified){
        String path="src/main/webapp/download/"+name;
        ArrayList<String> caps = FileReader.readFile(caption);

        int line=modified.length;
        int capCount=0;
        int modifyCount=0;

        File dir = new File("src/main/webapp/download/");
        if (!dir.exists()) {
            dir.mkdirs();
        }


        String location=modified[modifyCount][1];


        for (int i=0;i<caps.size();i++) {
            String s =caps.get(i);
            if(s.contains("-->")){
                capCount++;
                if(location.startsWith(capCount+"")){
                    String[] xy=location.split("-");
                    String modifiedCap=processCaption(caps.get(i+1),xy[1],modified[modifyCount][0]);

                    caps.set(i+1,modifiedCap);
                    modifyCount++;
                    if(modifyCount>=line){
                        break;
                    }
                    location=modified[modifyCount][1];
                }
            }
        }

        try{
            File file =new File(path);

            //if file doesnt exists, then create it
            if(!file.exists()){
                file.createNewFile();
            }

            //true = append file
            FileWriter fileWritter = new FileWriter(file);
            BufferedWriter bufferWritter = new BufferedWriter(fileWritter);

            for (String data: caps
                 ) {
                bufferWritter.write(data);
                bufferWritter.newLine();
            }
            bufferWritter.close();

            System.out.println("Done");

        }catch(IOException e){
            e.printStackTrace();
        }




        return "download/"+name;
    }

    private String processCaption(String original,String count,String modify){
        String str="";

        int c=Integer.parseInt(count);

        String[] sections=original.split("    ");

        sections[c-1]=modify;

        for(int i=0;i<sections.length-1;i++){
            str+=sections[i]+"    ";
        }
        str+=sections[sections.length-1];


        return str;
    }


    public static void main(String[] arg0){
        File a = new File("/Users/nick/Documents/文件/老师项目/字幕系统/代码/纠错/ErrorCorrection/target/ErrorCorrection/sample-spaced.vtt");
        String name = "sss.vtt";
        String[][] modify={{"你们的","1-1"},{"一万万中","2-2"}};

        FileReader r = new FileReader();
        r.saveFile(name,a,modify);
    }

}
