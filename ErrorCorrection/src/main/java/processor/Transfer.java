package processor;

import DAO.FileReader;

import java.io.File;

import java.util.ArrayList;

/**
 * Created by nick on 2017/2/21.
 */
public class Transfer {


    public String[][] getErrorList(File caption,File log){
        ArrayList<String> captions = FileReader.readFile(caption);
        ArrayList<String> logs= FileReader.readFile(log);


        ArrayList<String> caps = new ArrayList<>();
        for (int i=0;i<captions.size();i++) {
            String temp = captions.get(i);
            if(temp.contains("-->")){
                caps.add(captions.get(i+1));
            }
        }


        int line = logs.size();

        String[][] list=new String[line][5];

        for(int i =0;i<line;i++){
            String log1=logs.get(i);
            String[] logItems=log1.split("\\|");

            list[i][0]=logItems[1];

            String location = logItems[2];
            String[] point=location.split("-");


            String longSpaceCap=caps.get(Integer.parseInt(point[0]));
            String[] longCap=longSpaceCap.split("    ");
//          长字幕
            StringBuffer sb = new StringBuffer();
            for(int j = 0; j < longCap.length; j++){
                sb. append(longCap[j]);
            }
            String wholeCap = sb.toString();
            list[i][1]=wholeCap;
//          短字幕
            int y = Integer.parseInt(point[1]);
            String separateCap=longCap[y-1];
            list[i][2]=separateCap;


            list[i][3]=logItems[3];
            list[i][4]=logItems[2];
        }
        return list;
    }


    public static void main(String[] arg0){
        File a = new File("/Users/nick/Documents/文件/老师项目/字幕系统/代码/纠错/ErrorCorrection/src/main/webapp/file/sample-spaced.vtt");
        File b = new File("/Users/nick/Documents/文件/老师项目/字幕系统/代码/纠错/ErrorCorrection/src/main/webapp/file/summary_dolphin.txt");
        Transfer t = new Transfer();
        String[][] list=t.getErrorList(a,b);

        int x=list.length;
        int y = list[0].length;

        for(int i=0;i<x;i++){
            for(int j =0;j<y;j++){
                System.out.println(list[i][j]);
            }
        }

    }




}
