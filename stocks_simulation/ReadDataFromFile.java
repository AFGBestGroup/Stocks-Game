import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import javax.swing.JFileChooser;

//From Mrs. Taricco

public class ReadDataFromFile {

	public static void main(String[] args) {
		//load("C:\\Users\\iangr\\Desktop\\MAMS Stuff\\STEM and STW\\STEM I\\STEM I Main Project\\Raw_Data\\THE-ALL-IMPORTANT-EXCEL-SHEET.xslx");
		pick();
	}

	/**
	 * Loads a list of words from a given text file
	 * @param source the name of the file as an absolute path (ex. "C:\\CS\\Students\\studentNames.csv")
	 */
	public static String[][] load(String source)
	{
		// Construct the Scanner and File objects for reading
		int numRows=1250;
		int numColumns=8;
		String[][] data = new String[numRows][numColumns];
		try  {
			File inputFile = new File(source);
			Scanner in = new Scanner(inputFile);
			// Read the input file

			for(int i=0;i<numRows;i++)  {
				String line = in.nextLine();
				String[] dataForLineI = line.split(","); // The data is delimited by a comma ,
				for(int j=0;j<numColumns;j++) {
					//System.out.println("(i,j)-> (" +i+ " ," + j + ")");
					data[i][j]=dataForLineI[j];
				}

			}
			printData(data);


			in.close();
		}
		catch (FileNotFoundException fileEx)  {
			//this.source = null;
	        fileEx.printStackTrace();
		}
		return data;
	}

	/**
	 * Loads a selected file from a pop-up dialog window
	 */
	public static void pick()
	{
		JFileChooser chooser = new JFileChooser(".");
		if (chooser.showOpenDialog(null) == JFileChooser.APPROVE_OPTION)
		{
			load(chooser.getSelectedFile().getAbsolutePath());
		}
	}

	/** Prints the data for testing purposes
	 * @param data the data to be printed
	 */
	private static void printData(String[][] data)  {
		//System.out.println(data.length);
		//System.out.println();
		for (int i = 0; i < data.length; i++) {
			for(int j=0; j<data[0].length; j++) {
				System.out.print(data[i][j] + " ");
			}
			System.out.println();
		}
		System.out.println();
	}
}
