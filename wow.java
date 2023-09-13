import com.acmerobotics.roadrunner.geometry.Pose2d;
import com.acmerobotics.roadrunner.localization.Localizer;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.HardwareMap;

public class DeadWheelLocalizer implements Localizer {
    private DcMotor leftEncoder, rightEncoder, lateralEncoder;
    private double lateralEncoderTicksPerInch;
    private double lateralEncoderOffset;

    private Pose2d poseEstimate;

    public DeadWheelLocalizer(HardwareMap hardwareMap, double lateralEncoderTicksPerInch, double lateralEncoderOffset) {
        this.lateralEncoderTicksPerInch = lateralEncoderTicksPerInch;
        this.lateralEncoderOffset = lateralEncoderOffset;

        leftEncoder = hardwareMap.dcMotor.get("left_encoder");
        rightEncoder = hardwareMap.dcMotor.get("right_encoder");
        lateralEncoder = hardwareMap.dcMotor.get("lateral_encoder");

        poseEstimate = new Pose2d();
    }

    @Override
    public Pose2d getPoseEstimate() {
        return poseEstimate;
    }

    @Override
    public void setPoseEstimate(Pose2d pose2d) {
        this.poseEstimate = pose2d;
    }

    @Override
    public void update() {
        double leftTicks = leftEncoder.getCurrentPosition();
        double rightTicks = rightEncoder.getCurrentPosition();
        double lateralTicks = lateralEncoder.getCurrentPosition();

        double leftDistance = leftTicks / lateralEncoderTicksPerInch;
        double rightDistance = rightTicks / lateralEncoderTicksPerInch;
        double lateralDistance = (lateralTicks / lateralEncoderTicksPerInch) - lateralEncoderOffset;

        double heading = (rightDistance - leftDistance) / (2 * lateralEncoderOffset);
        double x = poseEstimate.getX() + (lateralDistance * Math.sin(heading));
        double y = poseEstimate.getY() + (lateralDistance * Math.cos(heading));

        poseEstimate = new Pose2d(x, y, heading);
    }
}
