public class Main {
    public static void main(String[] args) {
        String vals[] = ReadDataFromFile.load("stocks_data/AAPL.csv");

        String js = "let AAPL = [";
        for (String v : vals) {
            js += v + ", ";
        }
        js += "]";

        System.out.println(js);
    }
}